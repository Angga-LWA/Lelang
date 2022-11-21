import Product from "../models/ProductModel.js";


export const getProducts = async (req, res) => {
    try {
        const response = await Product.findAll({
            attributes:['id','prdcode','prdname','prddesc','price','min_multiples','location','auction_date','created_by']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getProductById = async (req, res) => {
   try {
        const response = await Product.findOne({
            attributes:['id','prdcode','prdname','prddesc','price','min_multiples','location','auction_date','created_by'],
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
   } catch (error) {
    res.status(500).json({msg: error.message});
   }
}

export const createProduct = (req, res) => {
    
}

export const updateProduct = (req, res) => {
    
}

export const deleteProduct = (req, res) => {
    
}