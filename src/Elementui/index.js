import Vue from 'vue';
// Element ui 按需引入
import { Form, FormItem, Input, Checkbox, CheckboxGroup, Switch, Button, Tag, Message, MessageBox ,Dialog} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Form)
    .use(FormItem)
    .use(Input)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(Switch)
    .use(Button)
    .use(Tag)
    // .use(Message)
    // .use(MessageBox)
    .use(Dialog)

// Vue.prototype.$message = Message;
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
