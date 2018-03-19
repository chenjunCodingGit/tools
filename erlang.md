>erlang笔记

### 可用

``` bash
droidhang@cd
application:ensure_all_started(dhstat). 编译运行后启动项目 
     ./rebar clean 
     ./rebar com 编译
     erlang文档提示地址 http://www.erlang.org/documentation/doc-7.3.1	

-setcookie
hook_heroes
-name
dhstat@10.0.1.211
-pa
deps/erlcron/ebin
-pa
deps/mongodb/ebin
-pa
deps/lager/ebin
-pa
deps/goldrush/ebin
-pa
deps/dhcomm/ebin
-pa
deps/rebar_vsn_plugin/ebin
-pa
deps/mochiweb/ebin
-pa
deps/jiffy/ebin

```

### erlang笔记

>1. erlang每一个语句都会有值 
>2. 变量名必须大写开头
>3. /  除号，表示浮点数
>4. div 整除    rem 取余数
>5. 原子是全局有效的，是一串以小写字母开头，后可跟数字字幕下划线@。一个原子的值就是它本身
>6. _占位符，重复使用，表示不关心的变量
>7. 字符串必须用双引号
>8. f().  让shell释放它所绑定过的所有变量
>9. 模块文件通常在. erl中，运行之前需要编译为.beam
>10. [X|[]]缩写为[X]
>11. 逗号(,) 分割函数调用、数据构造器以及模式中的参数
   句号(.) 在shell中分割完整的函数和表达式
   分号(;) 用来分割子句。在一下情况会用到子句：分段的函数定义、case语句、if语句、try...catch语句及receive表达式
   只要看到一组后面跟有表达式的模式，都会使用分号分割
   Pattern1 ->
      Expressions1;
   Pattern2 ->
      Expressions2;
   …
>12. 同名不同目函数没有任何关联
>13. fun 匿名函数,可以拥有任意参数
>14. =:= 恒等测试符
>15. fun不仅可以作函数的参数(如map、filter)，而且其他函数也可以将fun当做返回值
>16. -> 后面就是函数返回值
  重难点：第三章 返回fun的函数
>17. [2*X || X ,- L]. 记号[F(X) || X <- L]代表由F(X)组成的列表，其中X是取值于列表。因此它意味着 列表L中每一个元素X乘以2后的列表
   注意：记号||右边的元组{Name,Number}是用来匹配列表Buy中每个元素的模式，左边的元组{Name,2*Number}则是一个构造器
>18. 断言集合GuardExpr1，GuardExpr2，…，GuardExprN中，只有所有的断言都为true，整个断言序列才为true
>19. rf(tod>o).告诉shell释放todo这个记录的定义。
>20. 创建一个列表最有效率的方法是把元素加在一个现有的列表头部
>21. <<E1,E2,…,En>>
   Ei = Value |
        Value:Size |
        Value/TypeSpecifierList |
        Value:Size/TypeSpecifierList
   二进制数据中的总比特数必须恰好被8整除(因为二进制数据中包含的每个字节是8bit，因此二进制数据没有办法表达一个非8倍数长度的比特串）。
   当创建一个二进制数据时，Value必须是一个绑定变量、文本串或返回值为整数、浮点数或二进制数据的表达式。而在把比特语法用来做模式匹配操作时，Value则即可以是绑定的变量，也可是自由的变量，其类型也可以为整数、浮点数、文本串或者二进制数据。
   Size必须是一个返回值为整数的表达式。在模式匹配中，Size必须为一个整数或者是一个整型的绑定变量。Size不能是自由变量。
   Size的值指名了单元区块的长度，而默认值则依赖具体的类型。对于整型长度为8，浮点型为64，二进制数据元素在模式匹配中必须指名具体的长度。
>22. 模块属性：-AtomTag(...):定义文件的属性。erlang的模块属性分为 预定义属性和用户定义属性。<br><br>
  *预定义属性:* <br>
  <font color=#00CED1>-module(modename).</font> <br>
  模块声明，modename必须是一个<font color=#F08080>原子</font>，这个属性必须是文件中第一个属性，modename的代码应该存储在modename.erl的文件中。 <br>
  <font color=#00CED1>-import(Mod,[Name/Arity1,Name2/Arity2,...]). </font> <br>
  指定从Mod模块中导入参数为Arity1且名为Name1的函数。一旦导入后，调用这个函数时就不要特别指名模块名。<br>
  <font color=#00CED1>-export([Name/Arity1,Name2/Arity2,...]). </font> <br>
  只要被导出的函数才能再模块外部使用. <br>
  <font color=#00CED1>-complie(Options) </font> <br>
  向编译器选项列表中添加Options。Options是一个编译器选项或者一个编译器选项列表(列在了compile模块手册中) <br>
  说明：在用到编译选项compile(export_all).时，这会导出当前模块的所有函数而不需要显式的使用-export注释. <br>
  <br>
  *用户定义属性:* <br>
  <font color=#00CED1>-SomeTag(Value). </font> <br>
  SomeTag必须是一个<font color=#F08080>原子</font>，Value必须是一个<font color=#F08080>文字项</font>。模块属性的值被编译进模块并可以在运行时被提取出来。 <br>
>23. 宏 <br>
   -define(Constant,Replacement). <br>
   -define(Func(Var1,Var2,..,Var),Replacement). <br>
   ?FILE 拓展为当前文件名； <br>
   ?MODULE 拓展为当前模块名； <br>
   ?LINE 拓展为当前行号; <br><br>
   -undef(Macro). 取消该宏定义，在这个语句后不能再调用这个宏。<br>
   -ifdef(Macro). 只有Macro被定义后，才对该行以下的代码进行运算。<br>
   -ifndef(Macro). 只有在不定一Macro时，才对该行以下的代码进行运算。<br>
   -else. 只能在ifdef或ifndef之后出现。如果条件为false,才对该语句后的代码执行。<br>
   -endif. 标记ifdef或ifndef语句的结束。<br>
>24. io:format(String,[Args])会根据String中的格式信息在erlang shell中打印[Args]中的变量 <br>
     ~p 是完整打印  ~n换行
>25. 整型：整型变量可以代表的数据长度仅受限于可用的内存。<br>
     eg:K进制整数：2#0010110   16#af4da23(最高36进制) <br>
     $语法：语法$C表示ASCII字符C的整数值，因此$a是97的简写；$\n就是10，$\^c就是3 <br><br>
     浮点数:(有5部分)一个可选符号位、一个数值部分、一个小数点、一个小数部分及一个可选指数部分。<br>
     浮点数在内部会以IEEE 754的64 bit格式表示。浮点数范围：-10^323~10^308
>26. erlang的每一个进程都有自己的私有数据存储，叫做进程字典。
>27. 引用是全局唯一的erlang的值，使用BIF erlang:make_ref()来创建引用。
>28. 大小顺序：number < atom < refeerence < fun < port < pid < tuple < list < binary
>29. ==仅适用于浮点数和整数的比较 =:=则用于比较两个项目是否全等。  /= 不等于   =/=不全等
>30. _VarName 声明一个常规变量而不是匿名变量。如果一个变量在一个子句中只被使用一次，那么编译器通常都会提出警告，因为这很有可能存在错误征兆。这时使用 _VarName
>31. @spec code:add_patha(Dir) => true | {error,bad_directory}  增加一个新目录Dir到加载路径的开头 <br>
     @sepc code:add_pathz(Dir) => true | {error,bad_directory}  增加一个新目录Dir到加载路径的末尾 <br>
     code:clash() 返回一个所有已被加载的模块列表，code_clash()检查问题
>32. 1> init:get_argument(home).  确定erlang系统所需的home目录在哪
>33. 只有在邮箱中的所有消息都进行过匹配之后才会检查after段时候需要进行运算.
>34. send其实并非是把一个消息传递到一个进程去，而是把一个消息发送到这个<font color=#00CED1>进程的邮箱</font>中去。同理，receive则是在试图把一条消息从进程邮箱中删除。<br>
     erlang的每一个进程都有与之对应的邮箱。当向进程发送消息时，消息就被送入邮箱之中。当系统对receive语句进行求值时，就是对进程邮箱进行检查的唯一机会。
>35. receive内部工作机制 pdf p.128
>36. 在编写一个像loop()那样用不返回的函数F，那么请确保不要在调用F之后再去调用任何其他的东西，也不要在列表或元组的构造器中使用。
>37. ETS和DETS基本做同一件事：提供大量的'键-值'搜索表。ETS驻留在内存，DETS驻留在磁盘。ETS和DETS的表可以被多个进程共享，这意味着可以通过这两个模块实现进程间高效的数据交换。一个ETS或DETS的表其实就是一系列erlang元组。<br>
     ETS数据存储是临时的，也就意味着当ETS表被释放时，相应的数据也会全部被丢弃。而DETS数据存储是持久的，就算系统崩溃也会毫发无损。<br>
     ETS不会被垃圾回收，这意味着使用极大的ETS表时，也无需顾虑垃圾回收造成的影响。相比于erlang对象，ETS对象的创建和访问性能则会有一些轻微的降低。
>38. 类型为set的表，要求所有元组的键值各不相同，而bag的表，则允许多个元组有相同的键值。
>39. ETS使用散列表表示的，ordered set使用平衡二叉树来表示的。这意味着set类型有点空间浪费，而ordered set有点时间浪费。向一个set表插入数据消耗的时间是一个常量，向一个ordered set插入数据所耗费的时间则与表的数据量有对数相关性。
>40. 尽可能的用二进制数据来表示字符串或大块的无类型内存是一种高效的变成模式。
>41. DETS文件大小不能超过2G。使用之前先打开DETS，用完一定要妥善关闭。如果两个及其以上本地进程使用相同的名字和属性打开一个DETS表，那么他们会共享这个表。这个表一直保持打开状态，指导所有的进程都关闭了这个表（或者这些进程死掉）。
>42. record在运行期会编译成tuple。
>43. 增加tuple元素： erlang:append_element({one, two}, three). -> {one,two,three} </br>
等效：list_to_tuple(tuple_to_list(Tuple1) ++ [Term])，但性能比后者高 
>44. 移除tuple元素:erlang:delete_element(2, {one, two, three}). -> {one,three}
>45. 进程间的消息传递是异步的，消息接收方总会拿到消息的一份单独的副本。消息送达后就被存放在接受当的信箱内，接收方进你可以通过receive表达式来获取消息。
>46. 消息抵达目的地之后，除非进程主动将该消息取走，否则消息会一直停留在进程的信箱内。信箱大小是没哟上限的
>47. 每个erlang系统都有一个本地进程注册表，一个名称一次只能用于一个进程，也就是仅使用于单例进程。