<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Document;

class DocumentsController extends Controller
{
    public function index(){
        $documents = Document::all();

        return $documents;
    }

    public function store(){

    }

    public function delete(Document $document){
        $document->delete();

        return response()->json(['status' => 'ok'], 200);
    }
}
