
//table中td的数据类型
const TD_TYPE = {
  string: 201,          //简单的字符串
  input: 202,           //INPUT_TYPE
  enum: 203,            //选择类型，一般给出value值，显示label值
  buttons: 204,         //按钮组
  menu:205,             //菜单
  template: 299         //模板类型，cb函数返回显示类型
};

//form element
const INPUT_TYPE = {
  text: 301,            //Text Input
  check: 302,           //CheckBox
  radio: 303,           //RadioBox
  datetime: 304,        //Datetime
  date: 305,            //Date
  time: 306,            //Time
  select: 307,          //Select
  file: 308,            //File Upload
  hidden: 309,          //hidden
  toggle: 310,          //Toggle 
  modal: 311,           //弹框？？
  label: 312,           //Label
  divide: 313,          //divide
  textarea: 314,        //Textarea
  multiSelect: 315,     //MultiSelect
  button: 316,          //Button
  color: 317,           //Color
  tag: 318,             //Tag
  autocomplete: 319,    //Autocomplete
  template: 399         //Template
};

const REG_TYPE = {
  AZ09_: /^[0-9a-z_]+$/i
};

const FILE_TYPE = {
  img: {
    type: 'img',
    reg: /\.jpg$|\.png$/i,
    msg: '请选择以‘.jpg’或‘.png’为后缀名的图片文件'
  },
  zip: {
    type: 'zip',
    reg: /\.zip$/i,
    msg: '请选择以‘.zip’为后缀名的压缩文件'
  }
};

export {
  TD_TYPE, INPUT_TYPE, REG_TYPE, FILE_TYPE
}
