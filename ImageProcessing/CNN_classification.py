import os
from keras.preprocessing.image import ImageDataGenerator
from keras.models import Sequential
from keras.layers import Conv2D, MaxPooling2D
from keras.layers import Activation, Dropout, Flatten, Dense
from keras.utils import to_categorical
import matplotlib.pyplot as plt

print("NEW START___________________________________________________________")
# Specify the directory where your images are located

# Create data generators for cancer and non-cancer images
image_size = (224, 224)
batch_size = 32

# Data augmentation for training set
train_datagen = ImageDataGenerator(
    rescale=1./255,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    rotation_range=40,  # Add rotation
    width_shift_range=0.2,  # Add width shift
    height_shift_range=0.2)  # Add height shift

cancer_generator = train_datagen.flow_from_directory(
    'ImageProcessing/folder_images/train',
    target_size=image_size,
    batch_size=batch_size,
    class_mode='categorical',
    shuffle=True)

noncancer_generator = train_datagen.flow_from_directory(
    'ImageProcessing/folder_images/train',
    target_size=image_size,
    batch_size=batch_size,
    class_mode='categorical',
    shuffle=True)

# Define the CNN architecture
model = Sequential()
model.add(Conv2D(16, (3, 3), input_shape=(224, 224, 3), padding='same'))
model.add(Activation('relu'))
model.add(MaxPooling2D(pool_size=(2, 2), strides=(2, 2)))
model.add(Conv2D(32, (3, 3), padding='same'))
model.add(Activation('relu'))
model.add(MaxPooling2D(pool_size=(2, 2), strides=(2, 2)))
model.add(Flatten())
model.add(Dense(2))
model.add(Activation('softmax'))

# Compile the model
model.compile(loss='categorical_crossentropy',
              optimizer='sgd',
              metrics=['accuracy'])
training_accuracy = []
validation_accuracy = []
history = model.fit_generator(
    cancer_generator,
    steps_per_epoch=len(cancer_generator),
    epochs=100,
    validation_data=noncancer_generator,
    validation_steps=len(noncancer_generator))
training_accuracy = history.history['accuracy']
validation_accuracy = history.history['val_accuracy']
# Plot the training and validation accuracy
plt.figure(figsize=(10, 6))
plt.plot(range(1, len(training_accuracy) + 1), training_accuracy, label='Training Accuracy')
plt.plot(range(1, len(validation_accuracy) + 1), validation_accuracy, label='Validation Accuracy')
plt.xlabel('Epoch')
plt.ylabel('Accuracy')
plt.title('Training and Validation Accuracy Over Time')
plt.legend()
plt.grid(True)
plt.show()

# Save the trained model
