//class defination
class A {
    //1 properties
    m = 100;
    n = 500;
    //2 constructor
    //3 method
    funA() {
        console.log(`multiply ${this.m * this.n}`);

    }
}//end of class A
class B extends A {
    //1 properties
    //2 constructor
    //3 method
    funB() {
        console.log(`addition ${this.m + this.n}`);

    }


}//end of class B
class C extends B {
    //1 properties
    //2 constructor
    //3 method
    funC() {
        console.log(`subtract ${this.m - this.n}`);
        
    }

}//end of class C
class D extends C {
    //1 properties
    //2 constructor
    //3 method
    funD() {
        console.log(`divide ${this.m / this.n}`);
        
    }

}//end of class D
class E extends D {
    //1 properties
    //2 constructor
    //3 method
    funE() {
        console.log(`mode ${this.m % this.n}`);
        
    }

}//end of class E
class F extends E {
    //1 properties
    o="java";
    p="script"
    //2 constructor
    //3 method
    funF() {
        console.log("concate:-"+(this.o+this.p));
        
    }

}//end of class f
class G extends F {
    //1 properties
    //2 constructor
    //3 method
    funG() {
        console.log(`function G`);
        
    }

}//end of class G
class H extends G {
    //1 properties
    fristname="harshita";
    lastname="jain";

    //2 constructor
    //3 method
    funH() {
        console.log(`name ${this.fristname+this.lastname}`);
        
    }

}//end of class H
class I extends H {
    //1 properties
    //2 constructor
    //3 method
    funI() {
        console.log(`functionI from class I `);
        
    }

}//end of class H
class J extends I {
    //1 properties
    mycat="jenny";
    //2 constructor
    //3 method
    funJ() {
        console.log(this.mycat);
        
    }

}//end of class J
class K extends J {
    //1 properties
    
    //2 constructor
    //3 method
    funK() {
        console.log("welcome to funK");
        
    }

}//end of class k
class L extends K {
    //1 properties
   
    //2 constructor
    //3 method
    funL() {
        console.log("funL");
        
    }

}//end of class L
class M extends L {
    //1 properties
    
    //2 constructor
    //3 method
    funM() {
        console.log("welcome to funM");
        
    }

}//end of class M
class N extends M {
    //1 properties
    
    //2 constructor
    //3 method
    funN() {
        console.log("welcome to funN");
        
    }

}//end of class N
class O extends N {
    //1 properties
    
    //2 constructor
    //3 method
    funO() {
        console.log("welcome to funO");
        
    }

}//end of class O
class P extends O {
    //1 properties
    
    //2 constructor
    //3 method
    funP() {
        console.log("welcome to funP");
        
    }

}//end of class P
class Q extends P {
    //1 properties
    
    //2 constructor
    //3 method
    funQ() {
        console.log("welcome to funQ");
        
    }

}//end of class Q
class R extends Q {
    //1 properties
    
    //2 constructor
    //3 method
    funR() {
        console.log("welcome to funR");
        
    }

}//end of class R
class S extends R {
    //1 properties
    
    //2 constructor
    //3 method
    funS() {
        console.log("welcome to funS");
        
    }

}//end of class S
class T extends S {
    //1 properties
    
    //2 constructor
    //3 method
    funT() {
        console.log("welcome to funT");
        
    }

}//end of class T
class U extends T {
    //1 properties
    
    //2 constructor
    //3 method
    funU() {
        console.log("welcome to funU");
        
    }

}//end of class U
class V extends U {
    //1 properties
    
    //2 constructor
    //3 method
    funV() {
        console.log("welcome to funV");
        
    }

}//end of class V
class W extends V {
    //1 properties
    
    //2 constructor
    //3 method
    funW() {
        console.log("welcome to funW");
        
    }

}//end of class W
class X extends W {
    //1 properties
    
    //2 constructor
    //3 method
    funX() {
        console.log("welcome to funX");
        
    }

}//end of class X
class Y extends X {
    //1 properties
    
    //2 constructor
    //3 method
    funY() {
        console.log("welcome to funY");
        
    }

}//end of class Y
class Z extends Y {
    //1 properties
    
    //2 constructor
    //3 method
    funZ() {
        console.log("welcome to funZ");
        this.funA();
        this.funB();
        this.funC();
        this.funD();
        this.funE();
        this.funF();
    
    }

}//end of class z



//creating object of child class
//let obj=new classname();
let obj = new Z();
obj.funZ();
obj.funG();
obj.funH();
obj.funI();
obj.funJ();
obj.funK();
obj.funL();
obj.funM();
obj.funN();
obj.funO();
obj.funP();
obj.funQ();
obj.funR();
obj.funS();
obj.funT();
obj.funU();
obj.funV();
obj.funW();
obj.funX();
obj.funY();