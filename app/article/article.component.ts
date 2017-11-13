import * as angular from 'angular';

import { ArticleController } from './article-controller';

const moduleName: string = 'article.viewer';

angular.module(moduleName,
    [
        'supplementals',
        'supplementals.dialog',
        'dataaccess',
    ])
    .controller('articleController', ArticleController)

export { moduleName as articleViewModuleName };