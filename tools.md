## 工具地址
``` 工具地址
69c39613efdcde9e4a7a865fad1ceab8
18200569163 
tool.lu //各种语言的工具
精灵图网站
emmet快速编辑
www.j--d.com/bezier   贝塞尔曲线
http://www.25xt.com/appsize  //媒体查询手机尺寸
https://www.cnblogs.com/think_fish/p/3800241.html   //冷门js、css技巧
https://github.com/markyun/My-blog/blob/master/Front-end-Developer-Questions/Questions-and-Answers/README.md     //前端开发面试题
https://pixplicity.com/dp-px-converter/     px与dp的转换，在各种屏幕上  
mongo:email:773390648   pwd:773390648qq.com
``` 
## js常用工具
``` js常用工具
时间戳转换：new Date(parseInt(1512086400) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ')
mounted:{$(&#39;body&#39;).resize()}   AdminLTE重新刷新才能正常加载
due解决百度map先渲染：this.$nextTick(_ => {…})
```

```apach服务器配置文件
AddType text/cache-manifest manifest
AddType text/cache-manifest .appcache
```

## react-native
```react-native
gradlew assembleRelease
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/

```

## unix系统
```unix
     			linux解锁：
sudo rm /var/cache/apt/archives/lock
sudo rm /var/lib/dpkg/lock

 ls -sAilF  = pwd  查看路径映射
—————————————————————————————————————————-
                mac:
apache 服务器:/Library/WebServer/Documents
隐藏/显示文件：defaults write com.apple.finder AppleShowAllFiles -bool true
            killAll Finder
```

## js技巧
```
1. 整个页面可编辑：
	document.body.contentEditable='true';
2. 生成随机字符串，默认基数是10进制：
	function generateRandomAlphaNum(len) {
	    var rdmString = "";
	    for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
	    return rdmString.substr(0, len);
	}
```
## css技巧
```
1. 垂直居中，IE9+:
	.center-vertical {
	    position: relative;
	    top: 50%;
	    transform: translateY(-50%);
	}
2. 水平居中，IE9+：
	.center-horizontal {
	    position: relative;
	    left: 50%;
	    transform: translateX(-50%); 
	}
3. 文字滤镜效果:
	p {
	    color: transparent;
	    text-shadow: #111 0 0 5px;
	}
4. 多重边框:
	div {
	    box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.2), 0 0 0 12px rgba(0, 0, 0, 0.2), 0 0 0 18px rgba(0, 0, 0, 0.2), 0 0 0 24px rgba(0, 0, 0, 0.2);
	    height: 200px;
	    margin: 50px auto;
	    width: 400px
	}
5. 实时编辑CSS,非IE:
	<style style="display:block" contentEditable>
        body { color: blue }
   </style>
6. 创建长宽比固定的元素
	通过设置父级窗口的padding-bottom可以达到让容器保持一定的长度比的目的，这在响应式页面设计中比较有用，能够保持元素不变形。
	<div style="width: 100%; position: relative; padding-bottom: 20%;">
	    <div style="position: absolute; left: 0; top: 0; right: 0; bottom: 0;">
	        this content will have a constant aspect ratio that varies based on the width.
	    </div>
	</div>
7. css做简单运算
	.container{
		background-position: calc(100% - 50px) calc(100% - 20px);
	}
```
 
 
## github及git使用
```github
             github添加成员
1.进入某个项目collaborators添加成员，成员通过邮箱同意
2.成员进入自己github主页 setting->SSH and GPG keys->new ssh key,将
  自己本机的ssh复制并添加。如果换了一台电脑，则重新该步骤


              git使用
git remote -v                    查看远程地址
git add .                        选择（映射）所有改变的文件
git commit -am “XXX”             添加描述
git remote add origin xxx.git    添加到远程
git pull origin some-branch      拉取某个分支
git push (-u) origin some-branch 推送某个分支
git status -s                    看看该分支的状态
git branch new-branch        	 新建某个分支
git checkout some-branch     	 切换到某个分支/切换并新建到本地的远程某个分支
git tag                      	 查看该项目所有tag版本
git tag v0.2.2              	 新建tag（只要以前没有该tag版本都可以）
git push origin v0.2.2      	 将新建的tag提交到该分支
git merge master            	 在develop分支，将master分支合并到develop(合并某分支到当前分支)

修改好.git/config后
git pull origin some-branch  拉取某个分支
git push origin some-branch  推送某个分支
git pull github some-branch  拉取某个分支
git push github some-branch  推送某个分支

版本回退(重点)
git reset --hard 46603c997cadb1bbcdac31c1471d4a1768416b6a
git push -f

git cherry -v                  查看到未传送到远程代码库的提交描述/说明
git log master ^origin/master  查看到未传送到远程代码库的提交详情



本地同一个项目同时管理内网gitlab和外网github项目

在当前项目:vim .git/config  打开配置文件
[core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
        ignorecase = true
        precomposeunicode = true
[remote "origin"]
        url = git@10.0.0.226:songxiao/dhstat.git
        fetch = +refs/heads/*:refs/remotes/origin/*
—————————————————————————————————————————————————————————
//新增到github：github.com/devDroidhang/dr2_stat.git，
  改变url即可使github外网共享gitlab项目
————————————————————————————————————————————————————————-
[remote "github"]
        url = git@github.com:devDroidhang/dr2_stat.git
        fetch = +refs/heads/*:refs/remotes/origin/*
—————————————————————————————————————————————————————----
[branch "master"]
        remote = origin
        merge = refs/heads/master
[branch "develop"]
        remote = origin
        merge = refs/heads/develop

—————————————————————————————————————————-
```

## NODE

```
https://github.com/nswbmw/N-blog
1. 一起学Node.js: https://github.com/nswbmw/N-blog

2.七天学会NodeJS: https://github.com/nqdeng/7-days-nodejs

3: 深入理解Node.js：核心思想与源码分析: https://github.com/yjhjstz/deep-into-node

4.Koa2进阶学习笔记 https://github.com/chenshenhai/koa2-note
```

## PS

```
1. F8 -- 打开图层信息,按住win查看width-height
2. Ctrl+r -- 线和像素
3. Tab -- 显示工程信息
4. Ctrl+d -- 取消选中图层
5. T -> win -- 查看文字color、font-size等信息
6. C(修剪) -> V(移动) -> Ctrl+Alt+Shift+s -- 动态轮播切图 
7.  
```

## mysql
```
pws:newpass
```

## 其他

```
1. smb://10.10.10.10  前往服务器
```

