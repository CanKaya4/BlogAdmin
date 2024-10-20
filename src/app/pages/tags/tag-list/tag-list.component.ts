import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TagService } from '../tag.service';
import { error } from 'console';

@Component({
  selector: 'app-tag-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tag-list.component.html',
  styleUrl: './tag-list.component.css'
})
export class TagListComponent implements OnInit {

  tags: any[] = []
  constructor(private tagService: TagService) { }
  ngOnInit(): void {
    this.tagService.getAllTags().subscribe(
      (data) => {
        console.log(data)
        this.tags = data
      },
      (error) => {
        console.log("API Error", error)
      }
    )
  }
}
