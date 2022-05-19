
     
    const validation = new JustValidate(
      '#form',
      {
        errorFieldCssClass: 'is-invalid',
        errorFieldStyle: {
          border: '1px solid #D11616',
        },
        errorLabelCssClass: 'is-label-invalid',
        errorLabelStyle: {
          color: '#D11616',
        },
        focusInvalidField: true,
        lockForm: true,
        errorContainer: '.errors-container',
      },
      [
        {
          key: 'Name is too short',
          dict: {
            ru: 'Имя слишком короткое',
          },
        },
        {
          key: 'Field is required',
          dict: {
            ru: 'Обязательное поле',
          },
        },
      ]
    );

    var selector = document.querySelector("input[type='tel']");

    var im = new Inputmask("+7(999) 999-99-99");
    im.mask(selector);	

    validation
      .addField('#name', [
        {
          rule: 'required',
          errorMessage: 'Обязательное поле'
        },
        {
          rule: 'minLength',
          value: 3,
          errorMessage: 'Слишком короткое имя'
        },
        {
          rule: 'customRegexp',
          value: /(?=.*[a-z])/,
          errorMessage: 'Недопустимый формат',
        },
      ])
      .addField('#tel', [
        {
          validator: (value) => {
							const phone = selector.inputmask.unmaskedvalue()
							return Number(phone) && phone.length === 10
						},
          errorMessage: 'Введите 10 цифр',

        }
      ])