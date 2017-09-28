<?php 
namespace app\admin\model;

use think\Model;
use think\Db;

class Wish extends Model
{
	// protected $table='wish';//表名
    
   //查询
	function show()
	{
		return Db::table('wish')->where('id',9)->select();    
	}


	// 获取 表的 所有信息
	function getTableInfo(){
		return Db::getTableInfo('wish');
	}
    
}



 ?>