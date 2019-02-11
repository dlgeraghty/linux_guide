const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  name: {
    type: "String",
    required:true
  },
  url: {
    type: "String",
    required:true
  }
});

module.exports = Menu = mongoose.model('menu_item', MenuSchema);
