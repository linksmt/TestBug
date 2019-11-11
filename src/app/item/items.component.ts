import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { isIOS } from "tns-core-modules/platform";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {

        if (isIOS) {
            const pager = CHIPageControlAleppo.alloc().initWithFrame(CGRectMake(0, 0, 100, 50));
            
        }

    }
}
