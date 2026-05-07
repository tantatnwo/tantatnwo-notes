# 教程的开发环境

本教程的开发环境为：

- Win 10 （64位）
- Python 3.7.0
- Django 2.1

为了避免开发环境不同而导致的错误，建议读者使用相同的版本。

# 安装Anaconda

Anaconda 是一个专注于数据科学与机器学习的 Python/R 发行版，内置了 conda 包管理器及 numpy、pandas 等数百个常用库，能一键完成 Python 环境的安装和依赖管理。安装它可以避免手动配置 Python 和各类包的繁琐，尤其适合需要快速搭建科学计算环境或管理多个隔离项目。配置虚拟环境只需在终端执行 `conda create -n 环境名 python=版本` 创建新环境，然后使用 `conda activate 环境名` 激活，即可在该环境中独立安装包，通过 `conda deactivate` 退出，从而为不同项目提供互不干扰的运行环境，彻底解决包版本冲突问题。

安装教程：[ 最新版最详细Anaconda新手安装+配置+环境创建教程](https://blog.csdn.net/qq_44000789/article/details/142214660))

# 代码编辑器的选择

需要一款**代码编辑器**或者**集成开发环境（IDE）来编辑python文件，以达到开发需求**。

市面上有很多Python的代码编辑器或者集成开发环境可以选择。

教程使用了代码编辑器**Pycharm**。

下载地址：[Pycharm官网]([PyCharm，您需要的唯一 Python IDE](https://www.jetbrains.com/zh-cn/pycharm/))

# 配置虚拟环境

虚拟环境（virtualenv，或venv ）是 Python 多版本管理的利器，可以使每个项目环境与其他项目独立开来，保持环境的干净，解决包冲突问题。你可以将虚拟环境理解为一个隔绝的小系统。

创建一个虚拟环境，并进入虚拟环境：

```
(base) C:\Users\86131>conda create -n Django_env python=3.7
(base) C:\Users\86131>conda activate django_env
```

新建一个文件夹，教程中为`django_project`。进入此文件夹：

```
(django_env) C:\Users\86131>cd C:\Users\86131\PycharmProjects\PythonProject\django_project
```


# 安装Djando

**在虚拟环境下**，输入命令`conda install django==2.1`：

```
(django_env) C:\Users\86131>conda install django==2.1

Collecting django==2.1 
    Using cached ... ... 
Successfully installed django-2.1

(django_env) C:\Users\86131>
```

通过指令 `conda install django==2.1`来安装和教程相同版本的Django。

系统打印出以上文字表示Django安装成功了。

# 创建Django项目

还是在**虚拟环境**下，在`django_project`文件夹中创建Django项目

```
(django_env) C:\Users\86131\PycharmProjects\PythonProject\django_project>django-admin startproject my blog
```

查看`django_project`文件夹，发现多了`my_blog`文件夹，其结构应该是这样：

```
my_blog/
| db.sqlite3
| manage.py
|
└── _my_blog/
    | settings.py
    | urls.py
    | wsgi.py
    └── __init__.py
```

这就是我们刚创建出来的项目了。

**注意Python3.7和Django<=1.11是不兼容的。如果报错请尝试安装新版本的Django，或者回退Python<=3.6版本。**

# 运行Django服务器

非常幸运，Django自带一个轻量的Web开发服务器，也被叫做“runserver”。

开发服务器是为了让你快速开发Web程序，通过它可以避开配置生产环境的服务器的繁琐环节。

开发服务器会自动的检测代码的改变，并且自动加载它，因此在修改代码后不需要手动去重启服务器，非常的方便。

要运行这个django服务器，首先要进入`my_blog`文件夹，即含有`manage.py`文件的那个：

```
(django_env) C:\Users\86131>cd C:\Users\86131\PycharmProjects\PythonProject\django_project\my_blog
```

输入命令`python manage.py runserver`：
```
(django_env) C:\Users\86131\PycharmProjects\PythonProject\django_project\my_blog>python manage.py runserver
Performing system checks...

System check identified no issues (0 silenced).
May 07, 2026 - 09:08:52
Django version 2.1, using settings 'my_blog.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.
```

系统打印出这些信息，说明服务器启动成功了，打开chrome浏览器，输入http://127.0.0.1:8000/，即倒数第2排信息提示我们的服务器地址。恭喜你，小火箭起飞，django运行起来了！
