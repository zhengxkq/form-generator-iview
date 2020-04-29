<template>
    <div v-if="multiple" :class="classes">
        <Tag
            v-for="item in computedFields"
            :key="item.name"
            border
            :color="item.color"
            :type="item.subtype || 'border'"
            :fade="item.fade"
        >{{ item.name }}</Tag>
    </div>
    <Tag
        v-else-if="computedField.name"
        :color="color"
        :type="field.subtype || 'border'"
        :fade="field.fade"
        :class="classes"
    >{{ name }}</Tag>
</template>

<script>
import {classPrefix} from '../utils/const';
import {getValue} from '../utils/processValue';

export default {
    inject: ['form'],
    props: {
        field: {
            type: Object,
            required: true
        },
    },
    computed: {
        classes() {
            return `${classPrefix}-${this.field.type.toLowerCase()}`;
        },
        multiple() {
            let value = getValue({
                originModel: this.form.model,
                model: this.field.model
            });
            return Array.isArray(value);
        },
        computedField() {
            if (this.multiple) {
                return {};
            }
            const options = this.field.options || [];
            if (options.length > 0) {
                let value = getValue({
                    originModel: this.form.model,
                    model: this.field.model
                });
                if (!options.find(item => item.value === value)) {
                    /* eslint-disable no-console */
                    console.warn('form.model' + value + '绑定警告，请配置正确的model值');
                    return {};
                }
                return options.find(item => item.value === value);
            }
            return {};
        },
        computedFields() {
            if (!this.multiple) {
                return [];
            }
            const options = this.field.options || [];
            let value = getValue({
                originModel: this.form.model,
                model: this.field.model
            });
            return options.filter(item => value.includes(item.value));
        },
        name() {
            return this.computedField.name || this.field.name;
        },
        color() {
            return this.computedField.color || this.field.color;
        }
    }
};
</script>

<style>

</style>
