<?php
class Themer {

    public static $assets = [];
    public static $STYLES = 'STYLES';
    public static $SCRIPTS = 'SCRIPTS';


    public static function themeFiles(){
      return self::getAssets();
    }

    public static function init(){
      return add_action('wp_enqueue_scripts',self::themeFiles());
    }

    public static function addStyle($name,$src){
      $newStyle = self::assetValuesToStdClass(self::$STYLES,$name,$src);
      self::addAssets($newStyle);

    }

    public static function addScript($name,$src,$deps = null,$version = null,$media = null){
      $newScript = self::assetValuesToStdClass(self::$SCRIPTS,$name,$src,$deps,$version,$media);
      self::addAssets($newScript);
    }

    public static function addAssets($asset){
        self::$assets[] = $asset;
    }

    public static function assetValuesToStdClass($type,$name,$src,$deps = null,$version = null,$media = null){
      $asset = new stdClass(); 
      $asset->name = $name;
      $asset->src = $src;
      $asset->type = $type;

      if($type === 'SCRIPTS'){
        $asset->deps = $deps;
        $asset->version = $version;
        $asset->media = $media;
      };

      return $asset;
    }

    public static function getEnqueueMethods($asset){
        switch ($asset->type) {
          case  self::$STYLES:
                wp_enqueue_style($asset->name,$asset->src);
                break;
          case  self::$SCRIPTS:
                wp_enqueue_script($asset->name,$asset->src,$asset->deps,$asset->version,$asset->media);
                break;
      }
    }
    
    public static function getAssets(){
      return function(){
        foreach (self::$assets as $asset) {
          self::getEnqueueMethods($asset);
        };
      };
    }
  }
?>
