---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: 无锡市二泉中学
  text: 非官方网站
  tagline: 一个由校友们建设和维护的二泉中学网站
  image:
    src: /logo.png
    alt: logo
  actions:
    - text: 加入二泉校群
      link: https://qm.qq.com/q/4k0oPjMvEI
    - theme: alt
      text: 学校介绍
      link: /introduction/

features:
  - icon:
      src: /logo.png
    title: 二泉校群
    details: 一个由校友建立的二泉聊天群</br>在这里可以谈天说地
    link: https://qm.qq.com/q/4k0oPjMvEI
    linkText: 加入群聊

---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
<script>
export default {
  mounted() {
    this.shuffleElements();
    // 如果确实需要在挂载后调用 reload() 方法，确保该方法已经定义
    // this.reload();
  },
  methods: {
    shuffleElements() {
      const elements = Array.from(document.querySelectorAll('div.VPFeatures .container .items .item'));
      const parent = document.querySelector('div.VPFeatures .container .items');

      for (let i = elements.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = elements[i];
        elements[i] = elements[j];
        elements[j] = temp;
      }

      // 清空父元素并将重新排序后的元素添加到父元素中
      parent.innerHTML = '';
      elements.forEach(element => {
        parent.appendChild(element);
      });
    }
  }
}
</script>
<confetti />
