fn main(){
    let num:i32=5;
    let mut fact:i32=1;
    if num>0{
        for i in 1..num+1{
            fact=fact*i
        }
    }
    println!("El factorial de {} es {}",num, fact)
}