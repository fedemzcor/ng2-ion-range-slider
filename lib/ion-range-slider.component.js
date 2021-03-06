"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("ion-rangeslider");
// var jQuery = require("jquery");
var IonRangeSliderComponent = (function () {
    function IonRangeSliderComponent(el) {
        this.onStart = new core_1.EventEmitter();
        this.onChange = new core_1.EventEmitter();
        this.onFinish = new core_1.EventEmitter();
        this.onUpdate = new core_1.EventEmitter();
        this.initialized = false;
        this.el = el;
    }
    IonRangeSliderComponent.prototype.ngOnInit = function () {
        this.inputElem = this.el.nativeElement.getElementsByTagName('input')[0];
        this.initSlider();
    };
    IonRangeSliderComponent.prototype.ngOnChanges = function (changes) {
        if (this.initialized) {
            for (var propName in changes) {
                var update = {};
                update[propName] = changes[propName].currentValue;
                jQuery(this.inputElem).data("ionRangeSlider").update(update);
            }
        }
    };
    IonRangeSliderComponent.prototype.update = function (data) {
        jQuery(this.inputElem).data("ionRangeSlider").update(data);
    };
    IonRangeSliderComponent.prototype.reset = function () {
        jQuery(this.inputElem).data("ionRangeSlider").reset();
    };
    IonRangeSliderComponent.prototype.destroy = function () {
        jQuery(this.inputElem).data("ionRangeSlider").destroy();
    };
    IonRangeSliderComponent.prototype.initSlider = function () {
        var that = this;
        jQuery(this.inputElem).ionRangeSlider({
            min: that.min,
            max: that.max,
            from: that.from,
            to: that.to,
            disable: this.toBoolean(that.disable),
            type: that.type,
            step: that.step,
            min_interval: that.min_interval,
            max_interval: that.max_interval,
            drag_interval: that.drag_interval,
            values: that.values,
            from_fixed: this.toBoolean(that.from_fixed),
            from_min: that.from_min,
            from_max: that.from_max,
            from_shadow: this.toBoolean(that.from_shadow),
            to_fixed: this.toBoolean(that.to_fixed),
            to_min: that.to_min,
            to_max: that.to_max,
            to_shadow: this.toBoolean(that.to_shadow),
            prettify_enabled: this.toBoolean(that.prettify_enabled),
            prettify_separator: that.prettify_separator,
            force_edges: this.toBoolean(that.force_edges),
            keyboard: this.toBoolean(that.keyboard),
            keyboard_step: that.keyboard_step,
            grid: this.toBoolean(that.grid),
            grid_margin: this.toBoolean(that.grid_margin),
            grid_num: that.grid_num,
            grid_snap: this.toBoolean(that.grid_snap),
            hide_min_max: this.toBoolean(that.hide_min_max),
            hide_from_to: this.toBoolean(that.hide_from_to),
            prefix: that.prefix,
            postfix: that.postfix,
            max_postfix: that.max_postfix,
            decorate_both: this.toBoolean(that.decorate_both),
            values_separator: that.values_separator,
            input_values_separator: that.input_values_separator,
            prettify: that.prettify,
            onStart: function () {
                that.onStart.emit(that.buildCallback());
            },
            onChange: function (a) {
                that.updateInternalValues(a);
                that.onChange.emit(that.buildCallback());
            },
            onFinish: function () {
                that.onFinish.emit(that.buildCallback());
            },
            onUpdate: function () {
                that.onUpdate.emit(that.buildCallback());
            }
        });
        this.initialized = true;
    };
    IonRangeSliderComponent.prototype.toBoolean = function (value) {
        if (value && typeof value === "string") {
            return value.toLowerCase() != "false";
        }
        else {
            return value;
        }
    };
    IonRangeSliderComponent.prototype.updateInternalValues = function (data) {
        this.min = data.min;
        this.max = data.max;
        this.from = data.from;
        this.from_percent = data.from_percent;
        this.from_value = data.from_value;
        this.to = data.to;
        this.to_percent = data.to_percent;
        this.to_value = data.to_value;
    };
    IonRangeSliderComponent.prototype.buildCallback = function () {
        var callback = new IonRangeSliderCallback();
        callback.min = this.min;
        callback.max = this.max;
        callback.from = this.from;
        callback.from_percent = this.from_percent;
        callback.from_value = this.from_value;
        callback.to = this.to;
        callback.to_percent = this.to_percent;
        callback.to_value = this.to_value;
        return callback;
    };
    return IonRangeSliderComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "min", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "max", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "from", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "to", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "disable", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "step", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "min_interval", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "max_interval", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "drag_interval", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "values", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "from_fixed", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "from_min", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "from_max", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "from_shadow", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "to_fixed", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "to_min", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "to_max", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "to_shadow", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "prettify_enabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "prettify_separator", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "force_edges", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "keyboard", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "keyboard_step", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "grid", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "grid_margin", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "grid_num", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "grid_snap", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "hide_min_max", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "hide_from_to", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "prefix", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "postfix", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "max_postfix", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "decorate_both", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "values_separator", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], IonRangeSliderComponent.prototype, "input_values_separator", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Function)
], IonRangeSliderComponent.prototype, "prettify", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonRangeSliderComponent.prototype, "onStart", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonRangeSliderComponent.prototype, "onChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonRangeSliderComponent.prototype, "onFinish", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], IonRangeSliderComponent.prototype, "onUpdate", void 0);
IonRangeSliderComponent = __decorate([
    core_1.Component({
        selector: 'ion-range-slider',
        template: "<input type=\"text\" value=\"\" />"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], IonRangeSliderComponent);
exports.IonRangeSliderComponent = IonRangeSliderComponent;
var IonRangeSliderCallback = (function () {
    function IonRangeSliderCallback() {
    }
    return IonRangeSliderCallback;
}());
exports.IonRangeSliderCallback = IonRangeSliderCallback;
//# sourceMappingURL=ion-range-slider.component.js.map