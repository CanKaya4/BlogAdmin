import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {
  articles: any[] = []
  constructor(private articleService: ArticleService) { }
  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe(
      (data) => {
        console.log(data)
        this.articles = data;
      },
      (error) => {
        console.log('API error : ', error);
      }
    )
  }

  softDeleteArticle(articleId: number): void {
    this.articleService.softDeleteArticle(articleId).subscribe({
      next: (response) => {
        console.log('API yanıtı:', response); // Yanıtı kontrol edin
        alert('Makale başarıyla silindi.');

        const article = this.articles.find(a => a.id === articleId);
        if (article) {
          console.log(article)
          article.isDeleted = false; // Silindi durumunu güncelle
        }
      },
      error: (error) => {
        console.error('Silme işlemi sırasında bir hata oluştu:', error);
        alert('Silme işlemi başarısız oldu.');
      }
    });
  }



}
