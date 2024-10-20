import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  categories: any[] = []
  constructor(private categoryService: CategoryService) { }
  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      (data) => {
        console.log(data)
        this.categories = data
      },
      (error) => {
        console.log("API error", error);
      }
    )
  }
}
