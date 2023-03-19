Temlate: there is no  necessety to use a root element for template anymore
package.json: extends: plugin: vue/vue3-essential 
custom events: 
a new component option!!! emits: [],
validate emits
emits: {
    'emitname': value
}
vue 3 has a new feature called teleport - to move an element from one place to another
<Teleport to=#purple-box> </Teleport> something we put among tags is rendered in an element with an id of 'purple-box'
Teleport has a problem of css style inheritance

Vue3 use a new js feature proxies
for VUE2
this.$set(this.elem, 'value')
function() {
    delete this.elem  // thids is  a JS delete operator
    this.$delete(this.elem, 'value')
}

in VUE3
$set() and $delete() are removed
use native JS instead
this.var = 'value'
and
delete this.var

v-modal API has been changed in Vue3
Vue3 provides multiole bindings