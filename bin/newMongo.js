/**
 * Created by seen on 2016/5/4.
 */
var mongo = require('mongodb');

var server = new mongo.Server('localhost','27017',{auto_reconnect:true});

var db = new mongo.Db('test',server,{safe:true});

db.open(function(err,db){
    if(err) throw err;
    else{
        db.collection('user',function(err,collection){
            if(err) throw err;
            else {
                collection.insert({name:'huazai',age:12},function(err,result){
                    if(err) throw err;
                    else {
                        console.log('========================');
                    }
                })

                collection.remove({name:'aaa'},{safe:true},function(err,result){
                    if(err) throw err;
                    else{
                        console.log('...........................................');
                    }
                })
                collection.update({name:"huazai"}, {$set:{name:'aaa'}}, {safe:true}, function(err,result){
                    if(err) throw err;
                    else {
                        console.log("-----------------------------");
                    }
                })

                collection.findOne(function(err,docs){
                    if(err) throw err;
                    else{
                        console.log(docs);
                    }
                })
                //collection.find().toArray(function(err,docs){
                //    if(err) throw err;
                //    else{
                //        console.log(docs);
                //    }
                //})
            }
        })
    }
});
