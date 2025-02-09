const productcontainer=document.querySelector("#productContainer");
const productTemplate=document.querySelector("#productTemplate");


export const showproductConatiner=(products)=>{
    if(!products){
        return false;
    }
    
    products.forEach((curPro)=>{
        const {brand,category,description,id,image,name,price,stock}=curPro;
        
        const productClone=document.importNode(productTemplate.content,true);
        
        productClone.querySelector(".productName").textConten=name;
        
        productcontainer.append(productClone);
    });
};