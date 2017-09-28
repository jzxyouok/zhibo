<?php
namespace app\admin\controller;

use think\Cache; // 缓存

use app\admin\model\Wish; // wish 模型
// use app\admin\view\Wish; // wish 视图
use think\View;

class Index extends \think\Controller
{

    public function index()
    {
        $wish = new Wish();
        $data = $wish->show();
        // print_r($data);
        // $this->success('新增成功', 'Index/lists',2);
        return $this->fetch('index',['name'=>'thinkphp','data'=>$data[0] ]);

        // $view = new View();
        // $view->name = 'zzzzzzz';
        // return $view->fetch();

        
    }


    public function lists(){
        echo 'lists';
    }
}
