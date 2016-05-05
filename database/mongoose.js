var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost:27017/test');

//连接错误
db.on('error',function(error){
	console.log(error);
})

//Schema结构
var mongooseSchema = new mongoose.Schema({
	username:{type:String,default:'匿名用户'},
	title:{type:String},
	content:{type:String},
	time:{type:Date,default:Date.now},
	age:{type:Number}
})

//添加mongoose 实例方法
mongooseSchema.methods.findbyusername = function(username,callback){
	return this.model('mongoose').find({username:username},callback);
}

//添加mogoose静态方法,静态方法在model层就可以使用
mongooseSchema.statics.findbytitle = function(title,callback){
	return this.model('mongoose').find({title:title},callback);
}

//model
var mongooseModel = db.model('mongoose',mongooseSchema);

// 增加记录 基于 entity 操作
// var doc = {username : 'emtity_demo_username', title : 'emtity_demo_title', content : 'emtity_demo_content'};
// var mongooseEntity = new mongooseModel(doc);
// mongooseEntity.save(function(error){
// 	if(error) throw error;
// 	else{
// 		console.log('save1 ok!!!!!');
// 	}
// 	//关闭数据库连接
// 	// db.close();
// })

// // 增加记录 基于model操作
// var doc = {username : 'model_demo_username', title : 'model_demo_title', content : 'model_demo_content'};
// mongooseModel.create(doc,function(err){
// 	if(err) throw err;
// 	else{
// 		console.log('save2 ok!!!!!');
// 	}
// 	//关闭数据库连接
// 	// db.close();
// })

// 修改记录
// mongooseModel.update(conditions, update, options, callback);
// var conditions = {username:'model_demo_username'};
// var update = {$set:{age:27,title:'model_demo_title_update'}};
// var options = {upsert:true};
// mongooseModel.update(conditions, update, options, function(err){
// 	if(err) throw err;
// 	else{
// 		console.log('update ok!!!!'+Date.now());
// 	}
// 	// 关闭数据库连接
// 	db.close();
// });

//查询基于实例方法
// var mongooseEntity = new mongooseModel({});
// mongooseEntity.findbyusername('emtity_demo_username',function(err,docs){
// 	if(err) throw err;
// 	else{
// 		console.log(docs);
// 	}
// 	//关闭数据库连接
// 	db.close();
// })

// 基于静态方法的查询
// mongooseModel.findbytitle('model_demo_title_update',function(err,docs){
// 	if(err) throw err;
// 	else{
// 		console.log(docs);
// 	}
// 	//关闭数据库连接
// 	db.close();
// })

//mogoose find
// var criteria = {title:'model_demo_title_update'};
// var fields = {title:1,content:1,time:1};
// var options = {};
// mongooseModel.find(criteria,fields,options,function(err,docs){
// 	if(err) throw err;
// 	else{
// 		console.log(docs);
// 	}
// 	db.close();
// })

// //删除记录
// var conditions = {username:'model_demo_username'};
// mongooseModel.remove(conditions,function(err){
// 	if(err) throw err;
// 	else{
// 		console.log('remove ok!!!!!!');
// 	}
// 	db.close();
// })