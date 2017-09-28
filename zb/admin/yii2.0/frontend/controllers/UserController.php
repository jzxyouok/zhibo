<?php
namespace frontend\controllers;

use Yii;
use yii\web\Controller;

/**
 * 用户
 */
class UserController extends Controller
{
    /**
     * 查看
     */
    public function actionIndex()
    {
        return $this->render('user');
    }

    /**
     * 展示
     */
    public function actionShow()
    {
    	$dsn = "mysql:host=bdm289283378.my3w.com;port=3306;dbname=php7;charset=utf8";
		$user = 'bdm289283378';
		$pass = 'baoyuyu7800004';
		$pdo = new PDO($dsn,$user,$pass);

		// $select = $pdo->query($sql);
		// while ($list = $select->fetch(PDO::FETCH_OBJ)) { }
		// $stmt->fetch(PDO::FETCH_OBJ) ) {  // FETCH_ASSOC 关联数组 FETCH_BOTH 关联和索引 FETCH_OBJ  对象




    	$arr=array('a'=>$user,'b'=>2,'c'=>3,'d'=>4,'e'=>5);  
		$result=json_encode($arr);  
		//动态执行回调函数  
		$callback=$_GET['callback'];  
		echo $callback."($result)";  
        // return $this->render('user');
    }
}
