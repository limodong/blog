import Vue from 'vue';
import Icon from '@/components/Icon';
import styles from '@/styles/message.module.less'

/**
 * 获取组件实例的根DOM节点（不是虚拟节点，而是真实的DOM节点）
 * @param {*} component 一个SFC组件实例
 * @param {Object} props 组件实例需要传递的属性
 */
export function getComponentRootElement(component, params) {
    const vm = new Vue({
        render: (h) => h(component, { props: params })
    });
    // 调用挂载方法后才能生成DOM元素，生成DOM元素后会放入vue实例中的$el属性上
    vm.$mount(); // 如果$mount方法不提供参数则，DOM元素不会添加到HTML文档中
    return vm.$el; // vm.$el返回组件真实DOM元素
}

export function showMessage(options) {
    const { type, content, duration = 2000, container } = options;
    const div = document.createElement('div');
    const typeClass = styles[`message-${type}`];
    div.className = `${styles.message} ${typeClass}`;
    const icon = getComponentRootElement(Icon, { type: 'info' });
    console.log(icon.outerHTML);
    div.innerHTML = `${icon.outerHTML} <span style=''>${content}</span>`;
    if (!container) {
        document.body.appendChild(div);
    } else {
        container.appendChild(div);
    }
    // setTimeout(() => {
    //     div.remove()
    // },duration)
}