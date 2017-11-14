"use strict";

import * as angular from "angular";
//import { AppController } from "../../../common/AppController";
class AppController {
    constructor(

    ) {

    }
}

export class ArticleController extends AppController
//implements app.components.dialog.IPromptableDialogController 
{
    /*
    static $inject = [
        '$scope',
        '$state',
        'spinnerService'
    ];
    */
    constructor(
        private $scope,
        private $state
    ) {
        super();

    }

}