import { Component } from '@angular/core';
import { TagListComponent } from "./tag-list/tag-list.component";

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [TagListComponent],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {

}
