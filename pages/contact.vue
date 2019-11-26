<template>
  <div>
    <h1>Contact Form</h1>
    <v-col md="8">
      <v-form netlify>
        <v-text-field
          label="Name"
          placeholder="Enter your name"
          :rules="[v => !!v || 'This field is required']"
        />
        <v-text-field
          label="Email"
          type="email"
          placeholder="Enter your email address"
          :rules="[v => !!v || 'This field is required']"
        />
        <v-textarea
          label="Message"
          placeholder="Your message here"
          :rules="[v => !!v || 'This field is required']"
        />
        <v-btn type="submit">Submit</v-btn>
      </v-form>
    </v-col>
  </div>
</template>
