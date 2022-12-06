import Guarantee from "../models/GuaranteeModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";

export const getGuarantee = async (req, res) => {
   try {
        let response;
        if(req.role === "admin"){
            response = await Guarantee.findAll({
                attributes:['prdcode','nominal','status','payment_proof','verified_by'],
                include:[{
                    model: User,
                    attributes:['uuid','username','first_name','last_name','phone','email','role']
                }]
            });
        }else{
            response = await Guarantee.findAll({
                attributes:['prdcode','nominal','status','payment_proof','verified_by'],
                where:{
                    id_user: req.id_user
                },
                include:[{
                    model: User,
                    attributes:['uuid','username','first_name','last_name','phone','email','role']
                }]
            });
        }
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const getGuaranteeById = async (req, res) => {
    try {
        const guarantee = await Guarantee.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!guarantee) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Guarantee.findOne({
                attributes:['prdcode','nominal','status','payment_proof','verified_by'],
                where:{
                    id: guarantee.id
                },
                include:[{
                    model: User,
                    attributes:['uuid','username','first_name','last_name','phone','email','role']
                }]
            });
        }else{
            response = await Guarantee.findOne({
                attributes:['prdcode','nominal','status','payment_proof','verified_by'],
                where:{
                    [Op.and]:[{id: guarantee.id}, {id_user: req.id_user}]
                },
                include:[{
                    model: User,
                    attributes:['uuid','username','first_name','last_name','phone','email','role']
                }]
            });
        }
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const createGuarantee = async (req, res) => {
    const {prdcode, nominal, status, payment_proof, verified_by} = req.body;
    try {
        await Guarantee.create({
            id_user: req.id_user,
            prdcode: prdcode,
            nominal: nominal,
            status: status,
            payment_proof: payment_proof,
            verified_by: verified_by
        });
        res.status(201).json({msg: "Guarantee Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateGuarantee = async (req, res) => {
    try {
        const guarantee = await Guarantee.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!guarantee) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {prdcode, nominal, status, payment_proof, verified_by} = req.body;
        if(req.role === "admin"){
            await Guarantee.update({prdcode, nominal, status, payment_proof, verified_by},{
                where:{
                    id: guarantee.id
                }
            });
        }else{
            if(req.id_user !== guarantee.id_user) return res.status(403).json({msg: "Akses Terlarang"});
            await Guarantee.update({prdcode, nominal, status, payment_proof, verified_by},{
                where:{
                    [Op.and]:[{id: guarantee.id}, {id_user: req.id_user}]
                }
            });
        }
        res.status(200).json({msg: "Guarantee Updated successfuly"});
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const deleteGuarantee = async (req, res) => {
    try {
        const guarantee = await Guarantee.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!guarantee) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {prdcode, nominal, status, payment_proof, verified_by} = req.body;
        if(req.role === "admin"){
            await Guarantee.destroy({
                where:{
                    id: guarantee.id
                }
            });
        }else{
            if(req.id_user !== guarantee.id_user) return res.status(403).json({msg: "Akses Terlarang"});
            await Guarantee.destroy({
                where:{
                    [Op.and]:[{id: guarantee.id}, {id_user: req.id_user}]
                }
            });
        }
        res.status(200).json({msg: "Guarantee Updated successfuly"});
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}