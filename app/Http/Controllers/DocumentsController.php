<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Document;

class DocumentsController extends Controller
{
    public function index(){
        return Document::all();
    }

    public function store(Request $request){
        $document = Document::upload($request);

        return $document;
    }

    public function delete(Document $document){

        $document->delete();

        return response()->json(null, 204);
    }
}
