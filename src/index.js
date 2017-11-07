import PhotoSwipeComponent from './PhotoSwipe.vue'

let $vm

export default {
    install (Vue) {
        const PhotoSwipe = Vue.extend(PhotoSwipeComponent)

        if (!$vm) {
            $vm = new PhotoSwipe({el: document.createElement('div')})
            document.body.appendChild($vm.$el)
        }

        Vue.$photoswipe = {
            open (index, items, options, afterChangeCallback) {
                $vm.open(index, items, options, afterChangeCallback)
            },
            close () {
                $vm.close()
            },
            updateSize (items) {
                $vm.updateSize(items)
            }
        }

        Vue.mixin({
            created () {
                this.$photoswipe = Vue.$photoswipe
            }
        })
    }
}