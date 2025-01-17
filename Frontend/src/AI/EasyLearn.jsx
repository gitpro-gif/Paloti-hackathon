import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography, Paper } from '@mui/material';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const EasyLearn = () => {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    setLoading(true);
    // TODO: Add API call for summarization here
    // For now, just simulating a delay
    setTimeout(() => {
      setSummary('This is a sample summary of the text...');
      setLoading(false);
    }, 1500);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <AutoStoriesIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Text Summarizer
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          Paste your text below and get a concise summary instantly
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <TextField
          fullWidth
          multiline
          rows={6}
          variant="outlined"
          placeholder="Enter or paste your text here..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          sx={{ mb: 3 }}
        />
        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={handleSummarize}
          disabled={!inputText || loading}
        >
          {loading ? 'Summarizing...' : 'Summarize Text'}
        </Button>
      </Paper>

      {summary && (
        <Paper elevation={3} sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Summary
          </Typography>
          <Typography variant="body1">
            {summary}
          </Typography>
        </Paper>
      )}
    </Container>
  );
};

export default EasyLearn;
