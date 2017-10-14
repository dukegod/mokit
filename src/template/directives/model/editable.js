import Directive from '../../directive';
import Scope from '../../scope';
import { isNull } from 'ntils';

export default class EditableModelDirective extends Directive {

  inputHandler = () => {
    if (isNull(this.scope)) return;
    this.backExpr.execute(new Scope(this.scope, {
      _value_: this.node.innerHTML
    }));
  };

  /**
   * 初始化指令
   * @returns {void} 无返回
   */
  bind() {
    this.backExpr = new this.Expression(`${this.attribute.value}=_value_`);
    this.node.emitter.addListener('input', this.inputHandler, false);
  }

  unbind() {
    this.node.emitter.removeListener('input', this.inputHandler);
  }

  execute(scope) {
    let value = this.expression.execute(scope);
    if (this.node.innerHTML !== value) {
      this.node.innerHTML = value;
    }
  }

}