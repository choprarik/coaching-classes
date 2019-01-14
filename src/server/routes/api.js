const express = require('express');
const router = express.Router();
const axios = require('axios');
const LOGIN_URL = 'https://api.mlab.com/api/1/databases/rest/collections/user/1?apiKey=U0qKMuT9uI8_GDMNeOZvZAeRnRStMVmZ';
const PRODUCTS_URL = 'https://api.mlab.com/api/1/databases/rest/collections/products?apiKey=U0qKMuT9uI8_GDMNeOZvZAeRnRStMVmZ';
const STUDENTS_URL = 'https://api.mlab.com/api/1/databases/rest/collections/students?apiKey=U0qKMuT9uI8_GDMNeOZvZAeRnRStMVmZ';

var session = false;

// GET api listening
router.get('/',(req, res)=>{
    res.send('api works');
})

// GET for login credentials
router.get('/login', (req,res)=>{
    if(session==true){
        session = false;
        console.log("Session destroyed")
    }
    axios.get(LOGIN_URL)
    .then(login => {
        session = true;
        console.log("Session is set");
        res.status(200).json(login.data);
    })
    .catch(error => {
        res.status(500).send(error)
    });
});

// GET products
router.get('/products',(req,res)=>{
    if(session==true){
        axios.get(PRODUCTS_URL)
        .then(products => {
            res.status(200).json(products.data);
        })
        .catch(error => {
            res.status(500).send(error);
        });
    }else{
        res.status(404).send();
    }
});

// GET students
router.get('/students',(req,res)=>{
    if(session==true){
        axios.get(STUDENTS_URL)
        .then(students => {
            res.status(200).json(students.data);
        })
        .catch(error => {
            res.status(500).send(error);
        });
    }else{
        res.status(404).send();
    }
});

router.post('/add',(req,res,student)=>{
    if(session==true){
        axios.post(STUDENTS_URL,student)
        .then(response=>{
            res.status(200).send();
        })
        .catch(error => {
            res.status(500).send();
        })
    }else{
        res.status(404).send();
    }
})

module.exports = router;