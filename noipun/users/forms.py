# forms.py
from django import forms
from django.core.exceptions import ValidationError


class ForgetPasswordForm(forms.Form):
    password = forms.CharField(
        label='নতুন পাসওয়ার্ড দিন',
        widget=forms.PasswordInput(attrs={
            'placeholder': 'নতুন পাসওয়ার্ড দিন',
            'class': 'peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none',
            'autocomplete': 'off'
        })
    )
    password2 = forms.CharField(
        label='আবার পাসওয়ার্ড লিখুন',
        widget=forms.PasswordInput(attrs={
            'placeholder': 'আবার পাসওয়ার্ড লিখুন',
            'class': 'peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none'
        })
    )

    def clean(self):
        cleaned_data = super().clean()
        password = cleaned_data.get('password')
        password2 = cleaned_data.get('password2')

        if password and password2 and password != password2:
            raise ValidationError('Passwords do not match')

        # You can add additional password validation checks here if needed

        return cleaned_data
