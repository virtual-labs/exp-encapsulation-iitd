### Java Package

A **java package** is a group of similar types of classes, interfaces and sub-packages.
Package in java can be categorized in two form, built-in package and user-defined package.
There are many built-in packages such as java, lang, awt, javax, swing, net, io, util, sql etc.

### Simple example of java package

The **package keyword** is used to create a package in java.

```sh
	//save as Simple.java  
	package mypack;  
	public class Simple{  
	 public static void main(String args[]){  
	    System.out.println("Welcome to package");  
	   }  
	}  

```

### How to compile java package

If you are not using any IDE, you need to follow the **syntax** given below:

```sh
	javac -d directory javafilename  
```

### Example

```sh
javac -d . Simple.java 
```

How to run java package program
**To Compile:** javac -d . Simple.java
**To Run:** java mypack.Simple

```sh
Output:Welcome to package
```

### How to access package from another package?

There are three ways to access the package from outside the package.
1.	import package.*;
2.	import package.classname;
3.	fully qualified name.

### 1) Using packagename.*
Example of package that import the packagename.*

```sh
	//save by A.java  
	package pack;  
	public class A{  
	  public void msg(){System.out.println("Hello");}  
	}  

```

```sh
	//save by B.java  
	package mypack;  
	import pack.*;  
	  
	class B{  
	  public static void main(String args[]){  
	   A obj = new A();  
	   obj.msg();  
	  }  
	}  

```

```sh
Output:Hello
```

### 2) Using packagename.classname

Example of package by import package.classname

```sh

	//save by A.java  
	  
	package pack;  
	public class A{  
	  public void msg(){System.out.println("Hello");}  
	} 

```

```sh
	//save by B.java  
	package mypack;  
	import pack.A;  
	  
	class B{  
	  public static void main(String args[]){  
	   A obj = new A();  
	   obj.msg();  
	  }  
}  

```

```sh
Output:Hello
```


### 3) Using fully qualified name

 Example of package by import fully qualified name

```sh
 	//save by A.java  
 	  
 	package pack;  
public class A{  
  public void msg(){System.out.println("Hello");}  
}  

```

```sh
	//save by B.java  
	package mypack;  
	class B{  
	  public static void main(String args[]){  
	   pack.A obj = new pack.A();//using fully qualified name  
	   obj.msg();  
	  }  
	}  

```

```sh
Output:Hello
```
