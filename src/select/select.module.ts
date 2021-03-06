import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IconModule } from '../icon/public-api';
import { InputModule } from '../input/public-api';
import { TagModule } from '../tag/public-api';
import { TooltipModule } from '../tooltip/public-api';

import { OptionGroupTitleDirective } from './helper-directives';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { OptionGroupComponent } from './option-group/option-group.component';
import { OptionPlaceholderComponent } from './option-placeholder.component';
import { OptionComponent } from './option/option.component';
import { SelectComponent } from './select.component';
import { IncludesDirective } from './validators';

@NgModule({
  imports: [CommonModule, InputModule, IconModule, TooltipModule, TagModule],
  declarations: [
    SelectComponent,
    OptionComponent,
    OptionGroupComponent,
    OptionPlaceholderComponent,
    MultiSelectComponent,
    IncludesDirective,
    OptionGroupTitleDirective,
  ],
  exports: [
    SelectComponent,
    OptionComponent,
    OptionGroupComponent,
    OptionPlaceholderComponent,
    MultiSelectComponent,
    IncludesDirective,
    OptionGroupTitleDirective,
  ],
})
export class SelectModule {}
