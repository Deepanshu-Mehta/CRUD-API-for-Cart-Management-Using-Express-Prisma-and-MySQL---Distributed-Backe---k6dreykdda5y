const {prisma} = require('../db/config')

const addProduct = async (req,res)=>{
    try{
        const {userId, productId, count} = req.body;
        if(!userId || !productId || !count){
            return res.status(404).json({error: "All fields required"});
        }
        const product = await prisma.cart.create({
            data : {userId, productId, count}
        });
        return res.status(201).json(product)

    }
    catch(err){
        return res.status(500).json({message : "Internal Server Error"})
    }
}

const getById = async(req,res)=>{
    try{
    const {id} = req.params.id;
    const product = await prisma.cart.findUnique({where : {cartId : id}});
    if(!product){
        return res.status(404).json({error: "Cart not found"})
    }
    return res.status(200).json(product);
    }
    catch(err){
        return res.status(500).json({message : "Internal Server Error"})
    }
}

const updateCart = async(req,res)=>{
    try{
        const {id} = req.params.id;
        const {count} = req.body;
        if(!count){
            return res.status(404).json({message: "Invalid body"});
        }
        const product = await prisma.cart.findUnique({where : {cartId : id}});
        if(!product){
            return res.status(404).json({error: "Cart not found"})
        }
        const Updatedproduct = await prisma.cart.update({
            where: {cartId: id},
            data: {count}
        });
        return res.status(200).json(Updatedproduct);
    }
    catch(err){
        return res.status(500).json({message : "Internal Server Error"})
    }
}

const deleteItem = async(req,res)=>{
    const {id} = req.params.id;
    const product = await prisma.Cart.findUnique({where : {userId: id}});
    if(!product){
        return res.status(404).json({});
    }
    const deleteProduct = await prisma.Cart.delete({where : {userId : id}});
    return res.status(200).json({message: "Cart deleted successfully" });
}

const addMissing = async(req,res)=>{
    try{
        const {userId, productId, count} = req.body;
        if(!userId || !productId || !count){
            return res.status(404).json({error: "All fields required"});
        }
    }
    catch(err){
        return res.status(500).json({message : "Internal Server Error"})
    }
}
module.exports = {addProduct, getById, updateCart, deleteItem, addMissing}