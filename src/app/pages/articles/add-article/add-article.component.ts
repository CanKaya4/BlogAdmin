import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-article',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './add-article.component.html',
  styleUrl: './add-article.component.css'
})
export class AddArticleComponent implements OnInit {
  articleForm: FormGroup;
  categories: any[] = [];
  tags: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Form oluşturma
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      tagId: [0, Validators.required],         // Seçilen etiket ID
      keyword: ['', Validators.required],
      description: ['', Validators.required],
      categoryIds: [[], Validators.required]
      //   categoryIds: [[], Validators.required]   // Çoklu kategori için
    });
  }

  ngOnInit() {
    // Kategorileri ve etiketleri component yüklendiğinde çek
    this.getCategories();
    this.getTags();
  }

  // Kategorileri API'den çekme
  getCategories() {
    this.http.get<any[]>('https://api.alikayablog.com.tr/api/Category/GetAllCategories')
      .subscribe(
        (response) => {
          console.log(response)
          this.categories = response;
        },
        (error) => {
          console.error('Kategori verisi çekilirken hata oluştu:', error);
        }
      );
  }

  // Etiketleri API'den çekme
  getTags() {
    this.http.get<any[]>('https://api.alikayablog.com.tr/api/Tag/GetAllTags')
      .subscribe(
        (response) => {
          this.tags = response;
        },
        (error) => {
          console.error('Etiket verisi çekilirken hata oluştu:', error);
        }
      );
  }

  // Form gönderme işlemi
  onSubmit() {
    if (this.articleForm.valid) {
      const formData = {
        title: this.articleForm.value.title,
        content: this.articleForm.value.content,
        tagId: this.articleForm.value.tagId,
        keyword: this.articleForm.value.keyword,
        description: this.articleForm.value.description,
        categoryIds: this.articleForm.value.categoryIds // Dizi olarak al
      };

      this.http.post('https://api.alikayablog.com.tr/api/Article/CreateArticle', formData)
        .subscribe(
          (response) => {
            console.log('Başarılı:', response);
          },
          (error) => {
            console.error('Hata:', error);
          }
        );
    } else {
      console.error('Form geçerli değil.');
    }
  }
}
