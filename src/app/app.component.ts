import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lang = 1;
  menu = [
    {
      "title":"Trang Chủ",
      "url":"home",
      "subMenu":[]
    },{
      "title":"Giới Thiệu",
      "url":"intro",
      "subMenu":[]
    },{
      "title":"Sản Phẩm",
      "url":"products",
      "subMenu":[
        {
          "title":"thức ăn cho heo",
          "url":"",
          "subMenu":[
            {
              "title":"thức ăn heo thịt",
              "url":"",
              "subMenu":[
                {
                  "title":"Thức ăn hỗn hợp",
                  "url":"",
                },{
                  "title":"Đậm đặc",
                  "url":"",
                },{
                  "title":"Loại đặc biệt",
                  "url":"",
                }
              ]
            },{
              "title":"thức ăn heo sữa",
              "url":"",
            },{
              "title":"thức ăn heo nái",
              "url":"",
            }
          ]
        },{
          "title":"thức ăn cho heo",
          "url":"",
          "subMenu":[
            {
              "title":"thức ăn heo thịt",
              "url":"",
              "subMenu":[
                {
                  "title":"Thức ăn hỗn hợp",
                  "url":"",
                },{
                  "title":"Đậm đặc",
                  "url":"",
                },{
                  "title":"Loại đặc biệt",
                  "url":"",
                }
              ]
            },{
              "title":"thức ăn heo sữa",
              "url":"",
            },{
              "title":"thức ăn heo nái",
              "url":"",
            }
          ]
        },{
          "title":"thức ăn cho heo",
          "url":"",
          "subMenu":[
            {
              "title":"thức ăn heo thịt",
              "url":"",
              "subMenu":[
                {
                  "title":"Thức ăn hỗn hợp",
                  "url":"",
                },{
                  "title":"Đậm đặc",
                  "url":"",
                },{
                  "title":"Loại đặc biệt",
                  "url":"",
                }
              ]
            },{
              "title":"thức ăn heo sữa",
              "url":"",
            },{
              "title":"thức ăn heo nái",
              "url":"",
            }
          ]
        },{
          "title":"thức ăn cho heo",
          "url":"",
          "subMenu":[
            {
              "title":"thức ăn heo thịt",
              "url":"",
              "subMenu":[
                {
                  "title":"Thức ăn hỗn hợp",
                  "url":"",
                },{
                  "title":"Đậm đặc",
                  "url":"",
                },{
                  "title":"Loại đặc biệt",
                  "url":"",
                }
              ]
            },{
              "title":"thức ăn heo sữa",
              "url":"",
            },{
              "title":"thức ăn heo nái",
              "url":"",
            }
          ]
        }
      ]
    },{
      "title":"Tuyển Dụng",
      "url":"recuitment",
      "subMenu":[]
    },{
      "title":"Hình Ảnh",
      "url":"pictures",
      "subMenu":[]
    },{
      "title":"Tin Tức",
      "url":"news",
      "subMenu":[]
    },{
      "title":"Liên Hệ",
      "url":"contacts",
      "subMenu":[]
    }
  ];
}
