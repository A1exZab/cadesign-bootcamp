<script setup>
import { reactive } from 'vue'

// Объявление события modal-close, которое может сгенерировано компонентом для родителя
const emit = defineEmits(['closeModal'])

const formData = reactive({
  post: { value: '', error: false },
  name: { value: '', error: false },
  email: { value: '', error: false },
  education: { value: '', error: false },
  address: { value: '', error: false },
  birthDate: { value: '', error: false },
  file: { value: null },
  comment: { value: '', error: false },
  agreement: { value: false }
})

const submitForm = () => {
  console.log(formData)
}

const onFileChange = (event) => {
  const file = event.target.files[0]
  formData.file.value = file
}

const clearFile = () => {
  formData.file.value = null
}
</script>

<template>
  <div class="form-call__container">
    <form @submit.prevent="submitForm" class="form-call__wrapper">
      <h2 class="form-call__title">Отклик на вакансию</h2>
      <div class="form-call__input-container">
        <label for="post">Желаемая вакансия*</label>
        <input
          placeholder="Желаемая вакансия*"
          v-model="formData.post.value"
          id="post"
          type="text"
          class="form-call__input form-call__input_text"
        />
      </div>

      <div class="form-call__input-container">
        <label for="name">Фамилия, имя и отчество*</label>
        <input
          placeholder="Фамилия, имя и отчество*"
          v-model="formData.name.value"
          id="name"
          type="text"
          class="form-call__input form-call__input_text"
        />
      </div>

      <div class="form-call__double-container">
        <div class="form-call__input-container form-call__input-container_phone">
          <label for="phone">Мобильный телефон*</label>
          <MaskInput
            mask="+7 (###) ###-##-##"
            placeholder="+7"
            v-model="formData.phone"
            id="phone"
            type="text"
            class="form-call__input form-call__input_text"
          />
        </div>

        <div class="form-call__input-container">
          <label for="email">E-mail</label>
          <input
            placeholder="E-mail"
            v-model="formData.email.value"
            id="email"
            type="text"
            class="form-call__input form-call__input_text"
          />
        </div>
      </div>

      <div class="form-call__input-container">
        <label for="education">Образование*</label>
        <input
          placeholder="Образование*"
          v-model="formData.education.value"
          id="education"
          type="text"
          class="form-call__input form-call__input_text"
        />
      </div>

      <div class="form-call__input-container">
        <label for="address">Адрес места жительства*</label>
        <input
          placeholder="Адрес места жительства*"
          v-model="formData.address.value"
          id="address"
          type="text"
          class="form-call__input form-call__input_text"
        />
      </div>

      <div class="form-call__double-container">
        <div class="form-call__input-container form-call__input-container_birthday">
          <label for="birthday">Дата рождения</label>
          <input
            v-model="formData.birthDate.value"
            id="birthday"
            type="date"
            class="form-call__input form-call__input_date"
          />
        </div>

        <div class="form-call__input-container form-call__input-container_file">
          <label v-if="!formData.file.value" for="file">Загрузить резюме</label>
          <span v-if="formData.file.value">{{ formData.file.value.name }}</span>
          <input id="file" type="file" class="form-call__input" @change="onFileChange" />
          <div v-if="formData.file.value" class="remove-file-button__container" @click="clearFile">
            <icon name="file-delete-icon" />
          </div>
        </div>
      </div>

      <div class="form-call__input-container">
        <label for="comments">Комментарий</label>
        <textarea
          placeholder="Комментарий"
          v-model="formData.comment.value"
          id="comments"
          type="text"
          class="form-call__input form-call__input_comments"
        />
      </div>

      <div class="form-call__submit-box">
        <label class="form-call__agreement-container">
          Я принимаю условия <a href="">передачи информации</a>
          <input v-model="formData.agreement.value" type="checkbox" class="form-call__checkbox" />
          <span class="checkmark"></span>
        </label>
        <button class="form-call__submit-button">Отправить</button>
      </div>

      <button @click="emit('closeModal')" class="form-call__close-button">
        <icon name="close-icon" />
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.form-call__container {
  width: 68vw;
  background: $white;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh 0;
}

.form-call__wrapper {
  width: 62%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 103px 0 65px 0;
}

.form-call__title {
  font-size: 36px;
  line-height: 42px;
  font-family: 'HeliosC Bold';
  margin-bottom: 57px;
  align-self: start;
}

.form-call__double-container {
  width: 100%;
  display: flex;
  gap: 5px;

  & > .form-call__input-container {
    max-width: calc(50% - 2.5px);
  }

  & > .form-call__input-container_birthday {
    width: 37%;
    margin-right: 29px;
  }
}

.form-call__input-container {
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 32px;

  & label {
    display: none;
  }

  &:has(input:focus) {
    & input {
      padding: 35px 0 15px 28px;
    }

    & label {
      display: block;
      position: absolute;
      top: 10px;
      left: 28px;
      font-size: 14px;
      line-height: 20px;
      color: #828282;
    }
  }
}

.form-call__input {
  width: 100%;
  padding: 25px 28px;
  line-height: 20px;
  color: $dark;
  background: #f2f2f2;
  border: 1px solid #e0e0e0;

  &:focus {
    background: $white;
    outline: none;
    &::placeholder {
      opacity: 0;
    }
  }

  &_comments {
    min-height: 150px;
    resize: none;
  }
}

.form-call__input-container_phone {
  & label {
    display: block;
    position: absolute;
    top: 10px;
    left: 28px;
    font-size: 14px;
    line-height: 20px;
    color: #828282;
  }

  & > input {
    padding: 35px 0 15px 28px;
  }

  & > input:focus {
    &::placeholder {
      opacity: 1;
    }
  }
}

.form-call__input-container_file {
  width: 37%;
  border-bottom: 1px solid $dark;
  position: relative;

  &:hover {
    border-bottom: 1px solid $blue;
  }

  & > label {
    @include flex-center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    color: $blue;
    font-size: 15px;
    position: static;
  }

  & > span {
    @include flex-center;
    cursor: pointer;
    width: 100%;
    height: 100%;
    font-size: 15px;
    text-overflow: ellipsis;
  }

  & > input {
    display: none;
  }
}

.remove-file-button__container {
  @include flex-center;

  width: 20px;
  height: 20px;
  position: absolute;
  top: calc(50% - 10px);
  right: 10px;
  cursor: pointer;
  z-index: 10;

  & > .vue-svg {
    color: #4f4f4f;

    &:hover {
      color: $orange;
    }
  }
}

.form-call__input-container_birthday {
  position: relative;
  & > input {
    &::-webkit-datetime-edit {
      // opacity: 0;
    }

    &:focus {
      // opacity: 1;
    }
  }

  & > input::-webkit-calendar-picker-indicator {
    display: block;
    background-repeat: no-repeat;
    width: 25px;
    height: 25px;
    border-width: thin;
  }

  & > input::-webkit-calendar-picker-indicator {
    position: absolute;
    right: 5%;
  }

  & > input::-webkit-datetime-edit-fields-wrapper {
    position: relative;
    left: 10%;
  }
  & > input::-webkit-datetime-edit {
    position: relative;
    left: 10%;
  }
}

.form-call__submit-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 38px 34px 38px 27px;
  border: 1px solid #e0e0e0;
}

.form-call__agreement-container {
  position: relative;
  font-size: 13px;
  line-height: 16px;
  padding-left: 42px;

  & > a {
    color: $blue;
  }

  & > input {
    display: none;

    &:checked ~ .checkmark {
      background-color: $orange;
      border: 1px solid $orange;

      &::after {
        display: block;
      }
    }
  }
}

.form-call__submit-button {
  @include primary-button;
  background: $gray;
  width: 210px;
  height: 64px;
}

.form-call__close-button {
  @include primary-button;

  width: 70px;
  height: 70px;
  position: absolute;
  top: 0;
  right: -70px;

  & .vue-svg {
    transform: scale(0.67);
  }
}

.checkmark {
  position: absolute;
  top: -6px;
  left: 0px;
  height: 24px;
  width: 24px;
  background: $white;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: #e0e0e0;
  }

  &::after {
    content: '';
    position: absolute;
    display: none;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
}

@media (max-width: 1279px) {
  .form-call__container {
    width: 100%;
    margin: 0;
  }

  .form-call__close-button {
    width: 64px;
    height: 64px;
    top: 40px;
    right: 40px;
  }

  .form-call__wrapper {
    width: 100%;
    margin: 128px 0 77px 0;
    padding: 0 40px;
  }

  .form-call__title {
    font-size: 32px;
    line-height: 37px;
    margin-bottom: 53px;
  }
}

@media (max-width: 767px) {
  .form-call__close-button {
    width: 36px;
    height: 36px;
    top: 20px;
    right: 20px;
  }

  .form-call__wrapper {
    margin: 80px 0 42px 0;
    padding: 0 20px;
  }

  .form-call__title {
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 38px;
  }

  .form-call__input-container {
    margin-bottom: 20px;

    & label {
      font-size: 12px;
      line-height: 16px;
      position: absolute;
      left: 11px;
      top: 17px;
    }

    &:has(input:focus) {
      & input {
        padding: 24px 0 10px 12px;
      }

      & label {
        top: 7px;
        font-size: 9px;
        line-height: 12px;
      }
    }
  }

  .form-call__input-container_phone {
    & label {
      top: 7px;
      font-size: 9px;
      line-height: 12px;
    }

    & > input {
      padding: 24px 0 10px 12px;
    }
  }

  .form-call__input {
    padding: 17px 11px;
    font-size: 12px;
    line-height: 16px;

    &_comments {
      min-height: 100px;
    }
  }

  .form-call__double-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0;

    & > .form-call__input-container {
      max-width: 100%;
    }

    & > .form-call__input-container_birthday {
      width: 100%;
      margin: 0 0 5px 0;
    }

    .form-call__input-container_file {
      width: 100%;
      min-height: 53px;

      & > label {
        font-size: 12px;
        line-height: 15px;
        position: static;
      }
    }
  }

  .form-call__submit-box {
    padding: 0;
    border: none;
    flex-direction: column;
    align-items: start;
  }

  .form-call__agreement-container {
    margin-bottom: 38px;
    padding-left: 29px;
    font-size: 11px;
    line-height: 14px;
  }

  .form-call__submit-button {
    @include primary-button;

    font-size: 14px;
    line-height: 16px;
    background: $gray;
    width: 100%;
    height: 56px;
  }

  .checkmark {
    position: absolute;
    top: -3px;
    left: 0;
    height: 18px;
    width: 18px;
    border-radius: 2px;

    &::after {
      left: 6px;
      top: 4px;
      width: 5px;
      height: 7px;
      border-width: 0 2px 2px 0;
    }
  }
}
</style>
