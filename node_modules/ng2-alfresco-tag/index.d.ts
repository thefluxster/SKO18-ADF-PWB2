/*!
 * @license
 * Copyright 2016 Alfresco Software, Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ModuleWithProviders } from '@angular/core';
export * from './src/components/tag-actions.component';
export * from './src/components/tag-list.component';
export * from './src/components/tag-node-list.component';
export * from './src/services/tag.service';
export declare const TAG_DIRECTIVES: any[];
export declare const TAG_PROVIDERS: any[];
export declare class TagModule {
    static forRoot(): ModuleWithProviders;
}
