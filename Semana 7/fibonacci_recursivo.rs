fn fb_recur(n:i32)->i32{
    if n==0{
        return 0;
    }else if n==1{
        return 1
    }else{
        return fb_recur(n-1)+fb_recur(n-2)
    }

}

fn main(){
    let n:i32=5;
    let fibo_iter:i32= fb_recur(n);

    println!("El fibonacci iterativo de {} es {}",n,fibo_iter)
}