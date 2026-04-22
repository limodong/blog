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
    const { type, content, duration = 2000, container, callback } = options;
    const div = document.createElement('div');
    const typeClass = styles[`message-${type}`];
    div.className = `${styles.message} ${typeClass}`;
    const icon = getComponentRootElement(Icon, { type: 'info' });
    console.log(icon.outerHTML);
    div.innerHTML = `${icon.outerHTML} <span style=''>${content}</span>`;

    if (!container) {
        document.body.appendChild(div);
    } else {
        if (getComputedStyle(container).position === "static") {
            container.style.position = "relative";
        }
        container.appendChild(div); // 因为添加元素是异步的，这段代码运行了但是元素没有立即被添加到容器中，就会导致后续的translate、opactiy效果的丢失
    }

    // 浏览器强制渲染（也就是强制浏览器重排reflow）
    div.clientHeight; // 导致reflow,强制浏览器重排，这时候div已经被添加进container容器中了，所以后续的translate、opactiy效果才会生效

    div.style.cssText = `opacity:1;transform:translate(-50%,-50%) translateY(20px);`; // 如果不强制刷新这段代码将会在div被添加到container容器之前就执行，就会导致看不见移动效果
    setTimeout(() => {
        div.style.cssText = `transform:translate(-50%,-50%) translateY(0px);opacity:0;`;
        div.addEventListener("transitionend", () => div.remove(), { once: true });
        if (callback && typeof callback === 'function') {
            callback();
        }
    }, duration)
}