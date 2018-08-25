const Item = require('../models/Item');

const responseHandler = res => (err, data) => {
  if (err) throw err;
  res.json(data);
};

module.exports.getItems = function(req, res) {
  Item
    .find(req.query)
    .exec(responseHandler(res));
}

module.exports.getItem = function(req, res) {  
  Item
    .findById(req.params.id)
    .exec(responseHandler(res));
}

module.exports.updateItem = function(req, res) {
  Item
    .update({
        _id: req.params.id 
      }, 
      req.body,
      responseHandler(res)
    );
};

module.exports.addItem = function(req, res) {
  var newItem = new Item(req.body);
  newItem.save(responseHandler(res));
};

module.exports.removeItem = function(req, res) {
  Item
    .find({ _id: req.params.id })
    .remove(responseHandler(res));
};
