import mongoose from 'mongoose';

interface Item {
  title: string,
  thumbnail: {
    trending?: {
      small: string,
      large: string,
    }
    regular: {
      small: string,
      medium: string,
      large: string,
    }
  },
  year: number,
  category: 'Movie' | 'TV Series',
  rating: 'E' | 'PG' | '18+',
  isTrending: boolean,
}

const itemSchema = new mongoose.Schema<Item>({
  title: {
    type: String,
    required: true,
    unique: true
  },

  thumbnail: {
    trending: {
      small: {
        type: String,
      },
      large: {
        type: String,
      },
    },

    regular: {
      small: {
        type: String,
        required: true,
      },
      medium: {
        type: String,
        required: true,
      },
      large: {
        type: String,
        required: true,
      },
    }
  },

  year: {
    type: Number,
    required: true,
  },

  category: {
    type: String,
    enum: ['Movie', 'TV Series'],
    required: true,
  },

  rating: {
    type: String,
    enum: ['E', 'PG', '18+'],
    required: true,
  },

  isTrending: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model('Item', itemSchema);
