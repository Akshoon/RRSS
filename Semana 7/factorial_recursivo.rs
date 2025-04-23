fn main(){
    let num:i32=5;
    let fact=factorial(num);
    println!("El factorial de {} es {}",num, fact)
}

fn factorial(n:i32)->i32{
    if n==0{
        return 1
    }else{
        return n*factorial(n-1)
    }
}