import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import { Subscription } from 'rxjs';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'nx-ui-image-drop-form',
  templateUrl: './image-drop-form.component.html',
  styleUrls: ['./image-drop-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageDropFormComponent implements OnInit, OnChanges, OnDestroy {
  @Input() image: string;
  @Output() imageChanged = new EventEmitter<string>();
  imageValueChangeSubs: Subscription | undefined;

  form: FormGroup;
  items: FormArray;
  isHovering: boolean;
  @ViewChild('imgFileInput') fileInput: ElementRef;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    if (!this.image) {
      this.createForm();
    }
    this.listenToChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.image) {
    //   this.createForm();
    //   // this.form.get('image').patchValue(this.image);
    //   this.listenToChanges();
    // }
  }

  createForm(): void {
    this.form = this.fb.group({
      test: null,
      image: null
    });
  }

  listenToChanges() {
    this.imageValueChangeSubs = this.form
      ?.get('image')
      ?.valueChanges.pipe(debounceTime(200))
      .subscribe(formData => {
        this.imageChanged.emit(this.form?.get('image')?.value);
      });
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onFileChange(files) {
    const reader = new FileReader();
    if (files && files.length > 0) {
      const file = files[0];
      if (file.size > 2097152) {
        alert('File size limit is 2MB');
        return;
      }
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form?.get('image')?.setValue(null); // FIXME quick fix
        this.form
          ?.get('image')
          ?.setValue(reader?.result?.toString().split(',')[1]);
      };
    }
  }

  clearImage() {
    this.form?.get('image')?.setValue(null);
    this.fileInput.nativeElement.value = '';
  }

  ngOnDestroy(): void {
    this.imageValueChangeSubs?.unsubscribe();
  }
}
