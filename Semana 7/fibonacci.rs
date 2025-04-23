fn fibonacci(x:i32)->i32{
    let mut a=0;
    let mut b=1;
    for i in 0..x{
        let temp=a;
        a=b;
        b=temp+b;
    }
    a
}

fn main(){
    let mut x=fibonacci(5);
    println!("Los primeros numeros son {}",x)
}